// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  res.status(200).json({ 
    who: [{
      age: '20', 
      person: 'Billy Bob',
    },
    {
      age: '201', 
      person: 'Billy sss',
    }]
  })
}
