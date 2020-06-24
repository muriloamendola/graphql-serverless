const companies = [
  {
    id: "1",
    name: "Juntos Somos Mais"
  },
  {
    id: "2",
    name: "Votorantim"
  },
  {
    id: "3",
    name: "Gerdau"
  }
];

class CompaniesRepository {
  getById (id) {
    return companies.find(c => c.id == id);
  }
}

module.exports = new CompaniesRepository();
