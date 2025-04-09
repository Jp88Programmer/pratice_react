import React, { useContext } from "react";
import { UserContext, mailContext } from "../App";

const CompF = () => {
  const user = useContext(UserContext);
  const mail = useContext(mailContext);

  return (
    <>
      {user} - {mail}
    </>
  );
  // return (
  //   <>
  //     <UserContext.Consumer>
  //       {(user) => {
  //         return (
  //           <mailContext.Consumer>
  //             {(mail) => {
  //               return (
  //                 <div>
  //                   {user} and {mail}
  //                 </div>
  //               );
  //             }}
  //           </mailContext.Consumer>
  //         );
  //       }}
  //     </UserContext.Consumer>
  //     <div>CompF</div>
  //   </>
  // );
};

export default CompF;
