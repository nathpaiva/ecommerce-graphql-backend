const Query = {
  dogs(parent, args, context, info) {
    // console.log("global", global);
    return [{ name: 'Tag' }, { name: 'Layla' }]
  },

  async items(parent, args, context, info) {
    const items = await context.db.query.items();

    return items;
  }
};

module.exports = Query;
