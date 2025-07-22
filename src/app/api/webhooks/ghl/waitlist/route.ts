import { NextRequest, NextResponse } from 'next/server'

const GHL_WAITLIST_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/qohVjcq7e7u0UqVI7QvM/webhook-trigger/92705cd0-585d-4f64-9eb9-8e1a49298e38'

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received waitlist form data:', body)
    console.log('Environment:', process.env.NODE_ENV)
    console.log('Vercel URL:', process.env.VERCEL_URL)
    

    
    // Transform the data to match GHL format
    const ghlData = {
      fullName: body.fullName,
      phone: body.phone,
      email: body.email,
      transactionalConsent: body.transactionalConsent || false,
      marketingConsent: body.marketingConsent || false,
      source: 'IncoXchange Waitlist Form',
      timestamp: new Date().toISOString(),
    }

    console.log('Sending to GHL:', ghlData)

    // Send to Go High Level webhook
    const ghlResponse = await fetch(GHL_WAITLIST_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(ghlData),
    })

    const ghlResponseText = await ghlResponse.text()
    console.log('GHL Response Status:', ghlResponse.status)
    console.log('GHL Response:', ghlResponseText)

    if (!ghlResponse.ok) {
      throw new Error(`GHL webhook failed: ${ghlResponse.status} - ${ghlResponseText}`)
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Waitlist form submitted successfully',
      ghlStatus: ghlResponse.status 
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })

  } catch (error) {
    console.error('Waitlist form webhook error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit waitlist form',
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    )
  }
} 