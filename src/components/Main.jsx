import React, { Component } from "react";
import UseEventHandling from "./UseRef/UseEventHandling";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: "",
    };
  }
  searchText(country) {
    this.setState(
      {
        c: country,
      },
      () => {
        console.log(this.state.c);
      }
    );
  }
  render() {
    return (
      <>
        {/* <Extents name="jayendra" score={45} profile="meta-physics" >
                    <Child name="child_pro_level" age={8} des="just like difference to define but not declare because it's danger" />
                </Extents>

                <br />

                <Mystate /> */}
        {/* <Counter /> */}
        {/* <ParentCom /> */}
        {/* <Form /> */}
        {/* <LifeCycleA /> */}
        {/* <ParentComponent /> */}
        {/* <RefDemo /> */}
        {/* <ParentComponent /> */}
        {/* <ParentFocus /> */}
        {/* <ParetnFRInput /> */}
        {/* <CounterUsingFunction /> */}
        {/* <FormUsingUseState /> */}
        {/* <UseStateUsingArr /> */}
        {/* <Counter /> */}
        {/* <CounterUseState /> */}
        {/* <Counter /> */}
        {/* <HookMouseMove /> */}
        {/* <MouseContainer /> */}
        {/* <CounterUseEffect /> */}
        {/* <Navbar /> */}
        {/* <FetchingData /> */}
        {/* <CompC /> */}
        {/* <UseConUse /> */}
        {/* <UseReduceEx /> */}
        {/* <UseReduceEx2 /> */}
        {/* <Pract /> */}
        {/* <FetchDataUsingState /> */}
        {/* <FetchDataUsingReducer /> */}
        {/* <PerOptissue /> */}
        {/* <IsEven /> */}
        {/* <FocusInput /> */}
        {/* <Counter /> */}
        {/* <PlayPause /> */}
        {/* <ClickTitleChange /> */}
        {/* <CustomCounter /> */}
        {/* <UserForm /> */}
        {/* <FirstStyled /> */}
        {/* <PlayPause /> */}
        {/* <IframeComp /> */}
        {/* <HigherOrderComp /> */}
        {/* <ClassComponent /> */}
        {/* <HOC /> */}
        {/* <DomainSugg/> */}
        {/* <Uniswap /> */}
        {/* <CounterCom /> */}
        {/* <Rgcpicker /> */}
        {/* <Iframe /> */}
        {/* <ExampleTextRoller /> */}
        {/* <Timer /> */}
        {/* <EthersContract /> */}
        {/* <StateChange /> */}
        {/* <ChainBase /> */}
        {/* <Comp12 /> */}
        <UseEventHandling />
      </>
    );
  }
}
