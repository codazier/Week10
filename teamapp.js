class Member {
    constructor(name, position) {
        this.name = name;
        this.position = postion;
    }
}

class team {
    constructor(id, name){
        this.id=id;
        this.name=name;
        this.member={};
    }

    addMember(member) {
        this.members.push(member);
    }
   
    deleteMember(member) {
        let index = this.members.indexOf(member);
        this.members.splice(index, 1);
    }
}