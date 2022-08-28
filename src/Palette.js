import { Component } from "react";
import Color from "./Color";
import styles from "./Palette.module.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.cssClasses = [styles.root];
    if (this.props.className)
      this.cssClasses.push(this.props.className);
  }
  render() {
    const { colors } = this.props;
    return (<ul className={this.cssClasses.join(" ")}>
      {this.props.children}
      {colors.map((color) => {
        return (<li key={color.value}>
          <Color {...color} />
        </li>);
      })}
    </ul>);
  }
}
