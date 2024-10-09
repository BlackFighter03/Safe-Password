export default  sortedStrings = (a, b) => {

    if (a.website < b.website) {
      return -1; // a viene prima di b
    }
    if (a.website > b.website) {
      return 1;  // a viene dopo b
    }
    if (a.username < b.username) {
        return -1; // a viene prima di b
      }
    if (a.username > b.username) {
        return 1;  // a viene dopo b
    }
    if (a.password < b.password) {
        return -1; // a viene prima di b
      }
    if (a.password > b.password) {
        return 1;  // a viene dopo b
    }
    return 0;
};