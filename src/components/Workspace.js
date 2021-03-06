import React from "react";
import ListItem from "./ListItem";

export default class Workspace extends React.Component {
  onDragOver = (ev) => {
    let editItems = document.getElementById("edit-items");
    ev.preventDefault();
    let sam = document.querySelector(".middrag");
    let u = document.querySelector(".target");
    if (u != null && sam.compareDocumentPosition(u) === 2) {
      editItems.insertBefore(sam, u);
    } else if (u != null) {
      editItems.insertBefore(sam, u.nextSibling);
    }
  };

  render() {
    const {
      currentList,
      listOfStates,
      currentStateIndex,
      renameListItemCallback,
      addState,
    } = this.props;
    let items = [];
    if (currentList) {
      items = currentList.items;
    }
    return (
      <div id="top5-workspace">
        <div id="workspace-edit" onDragOver={this.dragOver}>
          <div id="edit-numbering">
            <div className="item-number">1.</div>
            <div className="item-number">2.</div>
            <div className="item-number">3.</div>
            <div className="item-number">4.</div>
            <div className="item-number">5.</div>
          </div>
          <div id="edit-items" onDragOver={this.onDragOver}>
            {items.map((item, index) => (
              <ListItem
                currentList={currentList}
                key={index}
                text={item}
                index={index}
                listOfStates={listOfStates}
                currentStateIndex={currentStateIndex}
                renameListItemCallback={renameListItemCallback}
                addState={addState}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
