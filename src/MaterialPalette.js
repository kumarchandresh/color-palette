import { Component } from "react";
import materialColors from "./data/materialColors";
import styles from "./MaterialPalette.module.css";
import Palette from "./Palette";
import { titleCase } from "./utils/string";

export default class MaterialPalette extends Component {
  render() {
    return (<ul className={styles.root}>
      <ul className={styles.namesWrapper}>
        {materialColors.map((color) => <li key={color.name}
          style={{ color: color.variants[5].value }}
          className={styles.colorName}>
          <h1 className={styles.colorName}>{titleCase(color.name)}</h1>
        </li>)}
      </ul>
      <div className={styles.palettesWrapper}>
        {materialColors.map((color) => {
          if (!color.variants) {
            throw new TypeError("Color doesn't have variants.");
          }
          return (<li key={color.name} className={styles.groupWrapper}>
            <Palette className={styles.colorGroup}
              colors={color.variants.map((color) => ({ ...color, name: color.level }))} />
          </li>);
        })}
      </div>
    </ul>);
  }
}
