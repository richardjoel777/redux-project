// import { addBug, bugAdded } from "../bugs";
// import configureStore from "../configureStore";
// //import { apiCallBegan } from "../api";

// // describe("BugSlice", () => {
// //   describe("Action Creators", () => {
// //     it("addBug", () => {
// //       const bug = { description: "a" };
// //       const result = addBug({ description: "a" });
// //       const expected = {
// //         type: apiCallBegan.type,
// //         payload: {
// //           url: "/bugs",
// //           method: "post",
// //           data: bug,
// //           onSuccess: bugAdded.type,
// //         },
// //       };
// //       expect(result).toEqual(expected);
// //     });
// //   });
// // });

// describe("BugSlice", () => {
//   it("Should handle the addBug action", async () => {
//     const store = configureStore();
//     const bug = { description: "a" };
//     await store.dispatch(addBug({ description: "a" }));
//     console.log(store.getState());
//   });
// });
