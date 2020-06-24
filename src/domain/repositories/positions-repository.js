const positions = [
  {
    id: "1",
    name: "Fullstack Developer"
  },
  {
    id: "2",
    name: "Frontend Developer"
  },
  {
    id: "3",
    name: "Product Owner"
  }
];

class PositionsRepository {
  getById (id) {
    return positions.find(p => p.id == id);
  }
}

module.exports = new PositionsRepository();
