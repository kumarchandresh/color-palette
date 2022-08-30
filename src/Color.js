import { Component } from "react";
import styles from "./Color.module.css";

export default class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { isMouseOver: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.cssClasses = [styles.root];
  }
  handleClick() {
    navigator.clipboard.writeText(this.props.value);
  }
  handleMouseEnter() {
    this.setState({ isMouseOver: true });
  }
  handleMouseLeave() {
    this.setState({ isMouseOver: false });
  }
  render() {
    
    return (<figure
      className={this.cssClasses.concat([this.state.isMouseOver ? styles.btnGrow : styles.btnShrink]).join(" ")}
      style={{ backgroundColor: this.props.value }}
      onClick={this.handleClick}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
    >
      <div className={styles.wrapper}>
        {
          this.state.isMouseOver
            ? <input type="submit" value="copy" className={styles.copyBtn}/>
            : null
        }
        {
          this.props.name
            ? <figcaption className={styles.caption}>
              <p>{this.props.name}</p>
            </figcaption>
            : <figcaption className={styles.caption}>
              <code>{this.props.value}</code>
            </figcaption>
        }
      </div>
    </figure >);
  }
}
