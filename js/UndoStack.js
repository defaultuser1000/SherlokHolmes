function UndoItem(perform, data) {
    this.perform = perform;
    this.data = data;
}

function UndoStack(self) {
    this.stack = [];
    this.current = -1;
    this.self = self;
}

UndoStack.prototype.push = function (perform, data) {
    this.current++;
    this.stack.splice(this.current);
    this.stack.push(new UndoItem(perform, data));
};

UndoStack.prototype.undo = function () {
    let item;

    if (this.current >= 0) {
        item = this.stack[this.current];
        item.perform.call(this.self, false, item.data);
        this.current--;
    } else {
        throw new Error("Already at oldest change;");
    }
};