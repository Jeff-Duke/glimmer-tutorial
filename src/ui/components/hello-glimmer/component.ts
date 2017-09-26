import Component, { tracked } from '@glimmer/component';

export default class HelloGlimmer extends Component {
  @tracked
  person: null;

  constructor(options) {
    super(options);
    this.loadPerson();
  }

  apiRoot: 'https://jsonplaceholder.typicode.com';

  async loadPerson() {
    let request = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let json = await request.json();
    this.person = json;
  }
};
