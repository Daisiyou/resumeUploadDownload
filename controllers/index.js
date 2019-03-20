class indexContronl {
  static async index(ctx){
    await ctx.render('index', {
      title: 'Hello Koa 2!'
    })
  }

  static async hello(ctx){
    ctx.body={
      title: 'Hello Koa 2!'
    }
  }
}

module.exports = indexContronl
