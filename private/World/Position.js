Position = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Position.prototype = {
    equals: function(otherPos){
        return (this.x === otherPos.x && this.y === otherPos.y && this.z === otherPos.z);
    },
    copy: function(otherPos){
        this.x = otherPos.x;
        this.y = otherPos.y;
        this.z = otherPos.z;
    }
}

module.exports = Position;