// // let x;
// // console.log(x)
// // x = 3 + 2;
// // console.log(x)
// // x = x + 5
// // console.log(x)
// //
// // setTimeout(() => {
// //     console.log(x)
// // }, 5000)
// // x = 0;
//
// function read(filename) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("this is the content")
//             // InFail("errrrr")
//         }, 3000)
//     });
// }
//
// read("fil1")
//     .then(async (r1) => ({oldcontent: r1, newconent: await read("file2")}))
//     .then(co => console.log(co.oldcontent + co.newconent))
//     .catch(err => {
//         console.log("errr", err)
//     })
//
//
// //     .then(read("file2"))
// //     .then(read("file3"))
// //     .then(read("file4"))
// //     // .then(read("file5"))
// //     .then(read("file6"))
// //
// //
// // read("context.txt", (content1) => {
// //
// //     read("context.txt", (content2) => {
// //         read("context.txt", (content3) => {
// //             read("context.txt", (content4) => {
// //                 read("context.txt", (content1) => {
// //                     // read("context.txt", (content2) => {
// //                         read("context.txt", (content3) => {
// //
// //                         })
// //                     })
// //                 })
// //             })
// //         // })
// //     })
// // })
// //
// //
// //
// //
//
// read("context.txt", (content4) => {
// })
