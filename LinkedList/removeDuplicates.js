function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  let res = head;

  while (head && head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  return res;
};

function printList(head) {
  let ptr = head;
  let res = "";
  while (ptr) {
    res += ptr.val;
    ptr = ptr.next;
    res += "->";
  }
  console.log(res + "null");
}

// Example usage:
let head = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))),
);
printList(head);
let result = deleteDuplicates(head);
// The resulting linked list will be: 1 -> 2 -> 3
printList(head);
