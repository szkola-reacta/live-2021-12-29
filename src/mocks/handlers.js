import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),

  // TODO: move to config
  rest.get('https://api.airtable.com/v0/appZ3Ko6K42jAMR0H/news', (_req, res, ctx) => {
    return res(
      ctx.status(401),
      // ctx.json({
      //   records: [{
      //     id: 1,
      //     fields: {
      //       title: "News 1",
      //       intro: "Intro 1"
      //     }
      //   }, {
      //     id: 2,
      //     fields: {
      //       title: "News 2",
      //       intro: "Intro 2"
      //     }
      //   }, {
      //     id: 3,
      //     fields: {
      //       title: "News 3",
      //       intro: "Intro 3"
      //     }
      //   }]
      // }),
    )
  })
]
