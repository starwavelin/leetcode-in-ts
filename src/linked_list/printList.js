export const printList = (head) => {
    const res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    console.log(res);
}