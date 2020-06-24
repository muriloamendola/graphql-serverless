const users = [
  {
    id: "37",
    name: "Danny",
    positionId: "1",
    companyId: "1",
    friends: ["1", "2", "3"]
  },
  {
    id: "1",
    name: "Serrano",
    positionId: "2",
    companyId: "2",
    friends: ["37"]
  },
  {
    id: "2",
    name: "Eros",
    positionId: "3",
    companyId: "3",
    friends: ["37", "3"]
  },
  {
    id: "3",
    name: "Fuinha",
    positionId: "2",
    companyId: "3",
    friends: ["37", "2"]
  }
];

class UsersRepository {
  getById (id) {
    return users.find(u => u.id == id);
  }

  getByIds (ids) {
    return users.filter(u => ids.includes(u.id));
  }
}

module.exports = new UsersRepository();
