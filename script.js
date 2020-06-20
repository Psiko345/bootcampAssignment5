/*
Remember to use only/mainly jquery!

dynamically generate a row and columns for each hour of the day
    create a row and three columns
        create loop? for the ten hours
    assign classes and attributes
    fill hour boxes
    append page

get visuals related to time working
    
save task inputs to local storage

event listeners on save send textarea content to localstorage

*/

window.onload = function () {
  let container = $("#timeBlockContainer");
  timeBlockArray.forEach(function (aTimeBlock) {
    aTimeBlock.generateHtml(container);
  });
};

const createRowDiv = $("<div />").addClass("row");
const createColDiv = $("<div />");
const hourEle = $();

class TimeBlock {
  constructor(hour, text) {
    this.hour = hour;
    this.text = text;
  }

  handleClick(evt) {
    console.log("HERE" + this.hour);
  }

  generateHtml(parent) {
    let textBoxId = "taskInputBox" + this.hour;
    let taskSaveBtnId = "taskSaveBtn" + this.hour;
    parent.append(
      $(`<div class="row">
    <div class="col">
      <p class="hour time-block">${this.hour}</p>
    </div>
    <div class="col-8">
      <textarea id="${textBoxId}">${this.text}</textarea>
    </div>
    <div class="col" id="${taskSaveBtnId}">
      <button type="button" class="saveBtn">
        <i class="fas fa-save"></i>
      </button>
    </div>
  </div>`)
    );
    $("#" + taskSaveBtnId).click(this.handleClick);
  }
}

let timeBlockArray = [
  new TimeBlock(9, "blah ablha"),
  new TimeBlock(10, ""),
  new TimeBlock(11, ""),
  new TimeBlock(12, ""),
  new TimeBlock(13, "this text"),
  new TimeBlock(14, ""),
  new TimeBlock(15, ""),
  new TimeBlock(16, " lorem ipsum"),
  new TimeBlock(17, ""),
];
