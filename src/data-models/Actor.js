import moment from 'moment';

class Actor {
  constructor(fname, lname, birthday, image, link) {
    this.fname = fname;
    this.lname = lname;
    this.birthday = birthday;
    this.image = image;
    this.link = link;
    this.Age = this.Age.bind(this);
  }
  Age() {
    return moment(this.birthday, 'YYYY-MM-DD').fromNow().split(" ")[0];
  }
}
export default Actor;