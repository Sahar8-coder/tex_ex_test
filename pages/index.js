import * as React from "react";
import { MathComponent } from "mathjax-react";

class Index extends React.Component {
  render() {
    return <MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />;
  }
}