class Actor {
  constructor(fname, lname, birthday, image, link) {
    this.fname = fname;
    this.lname = lname;
    this.birthday = birthday;
    this.image = image;
    this.link = link;
  }
  ageOfActor() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthday;
        return age;
    }
}
export default Actor;