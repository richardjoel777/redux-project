// import store from "./customStore";
import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  assignUserToBug,
  bugByUserId,
  loadBugs,
  addBug,
  resolveBug,
  assignBugToUser,
} from "./store/bugs";
import { projectAdded, projectRenamed, projectRemoved } from "./store/projects";
import { userAdded } from "./store/users";
import * as actions from "./store/api";

const store = configureStore();

store.subscribe(() => {
  console.log("Store has Changed");
});

// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugResolved({ id: 1 }));
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1605625451317, 1)), 2000);
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(assignUserToBug({ bugId: 1, userId: 1 }));
//store.dispatch(projectRemoved({ id: 3 }));
// store.dispatch(projectRenamed({ id: 1, name: "Project New" }));

const unresolvedBugs = getUnresolvedBugs(store.getState());
const bugByUser = bugByUserId(1)(store.getState());
//console.log(bugByUser);
