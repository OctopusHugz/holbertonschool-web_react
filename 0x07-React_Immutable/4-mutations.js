import { List, Map } from 'immutable';

const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});
const map2 = List(map).set(2, 'Benjamin').set(4, 'Oliver');

// Adding other possibilities since task requirement is so vague

// const map2 = map.set('2', 'Benjamin').set('4', 'Oliver');

// const map2 = map.toIndexedSeq().set(2, ['Benjamin']).set(4, ['Oliver']);

// const map2 = map.toIndexedSeq().toArray();
// map2[2] = 'Benjamin';
// map2[4] = 'Oliver';

export { map, map2 };
