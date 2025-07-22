import { NextRequest, NextResponse } from 'next/server'

const GHL_CONTACT_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/qohVjcq7e7u0UqVI7QvM/webhook-trigger/105ce050-98bc-4e7a-8014-dd3116265630'

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
    console.log('Received contact form data:', body)
    console.log('Environment:', process.env.NODE_ENV)
    console.log('Vercel URL:', process.env.VERCEL_URL)
    
    // Transform the data to match GHL format
    const ghlData = {
      fullName: body.fullName,
      phone: body.phone,
      email: body.email,
      subject: body.subject || '',
      message: body.message || '',
      transactionalConsent: body.transactionalConsent || false,
      marketingConsent: body.marketingConsent || false,
      source: 'IncoXchange Contact Form',
      timestamp: new Date().toISOString(),
    }

    console.log('Sending to GHL:', ghlData)

    // Send to Go High Level webhook
    const ghlResponse = await fetch(GHL_CONTACT_WEBHOOK_URL, {
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
      message: 'Contact form submitted successfully',
      ghlStatus: ghlResponse.status 
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })

  } catch (error) {
    console.error('Contact form webhook error:', error)
    
    // TODO: Implement fallback to 1prompt iframe here if needed
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit contact form',
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