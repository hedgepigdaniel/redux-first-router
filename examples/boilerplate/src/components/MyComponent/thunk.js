export default (props) => {
  console.log('TESTING_TUHK', props);
  console.log('THUNK:route', props.route)
  console.log('THUNK:action', props.action);
console.log(props);
  return props.action;
}

