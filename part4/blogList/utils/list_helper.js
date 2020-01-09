const dummy = blogs => blogs? 1 : null;

const totalLikes = blogs => blogs.reduce((sum, item)=> sum+item.likes, 0)

module.exports = {dummy, totalLikes};