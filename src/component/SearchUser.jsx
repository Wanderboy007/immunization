// import React, { useEffect, useState } from "react";

// const SearchUser = () => {
//   const [search, setSearch] = useState("");
//   console.log(search);

//   let arr = [
//     { id: "1", color: "red", value: "#f00" },
//     { id: "2", color: "green", value: "#0f0" },
//     { id: "3", color: "blue", value: "#00f" },
//     { id: "4", color: "cyan", value: "#0ff" },
//     { id: "5", color: "magenta", value: "#f0f" },
//     { id: "6", color: "yellow", value: "#ff0" },
//     { id: "7", color: "black", value: "#000" },
//   ];

//   function getfilter() {}

//   // let z = [];
//   useEffect(() => {
//     const x = arr.filter((cur) => {
//       return cur.color.includes(search);
//     });

//     // z.push(x);
//     console.log(x);
//   }, [search]);
//   // console.log(z);

//   // data_array.map((data) => {
//   //   // <div key={data.id}>{data.color}</div>;
//   //   console.log(data.color);
//   // });

//   return (
//     <>
//       <div>
//         <label htmlFor="search">search</label>
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="search"
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//           }}
//         />
//       </div>
//       <div>
//         jhsdijbik
//         {arr.map((data) => {
//           return (
//             <>
//               <div key={data.id}>
//                 <div>{data.color}</div>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default SearchUser;
