import { h } from 'preact';
import { hookComponent, watch, notify } from './hookComponent.js';
import shareArr from './shareA.js';
import shareObj from './shareB.js';

@watch(shareObj)
@watch(shareArr)
export default class One extends hookComponent {

  constructor() {
    super();
    this.aa = 123;
  }

  componentDidMount() {
    setInterval(() => {
      notify(shareArr, () => {
        shareArr.push(Math.random());
      });
    }, 1700);
  }

  // @watch(shareArr)
  // @watch(shareObj)
  render() {
    // console.log('render One');
    return (
      <div>
        <h2>One Here</h2>
        <p>{shareArr.length + ' ' + shareObj.name}</p>
      </div>
    );
  }
}