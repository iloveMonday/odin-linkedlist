(x) append(value) adds a new node containing value to the end of the list
(x) prepend(value) adds a new node containing value to the start of the list
(x) size returns the total number of nodes in the list
(x) head returns the first node in the list
(x) tail returns the last node in the list
(x) at(index) returns the node at the given index
(?) pop removes the last element from the list
(x) contains(value) returns true if the passed in value is in the list and otherwise returns false.
(x) find(value) returns the index of the node containing value, or null if not found.
(x) toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

Extra credit
() insertAt(value, index) that inserts a new node with the provided value at the given index.
() removeAt(index) that removes the node at the given index.

Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.