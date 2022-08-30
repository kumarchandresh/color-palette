import { Component } from "react";
import styles from "./Color.module.css";

export default class Color extends Component {
  render() {
    return (<figure
      className={styles.root}
      style={{ backgroundColor: this.props.value }}>
      <div className={styles.wrapper}>
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
