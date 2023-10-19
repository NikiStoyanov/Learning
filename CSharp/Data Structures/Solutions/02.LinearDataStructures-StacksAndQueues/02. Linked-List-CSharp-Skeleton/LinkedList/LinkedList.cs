using System;
using System.Collections;
using System.Collections.Generic;

public class LinkedList<T> : IEnumerable<T>
{
    public class Node
    {
        public Node(T value)
        {
            this.Value = value;
        }
        public T Value { get; set; }

        public Node Next { get; set; }
    }

    private Node[] arr;

    public LinkedList()
    {
        this.Capacity = 4;

        this.arr = new Node[this.Capacity];
    }

    public Node Head { get; private set; }

    public Node Tail { get; private set; }

    public int Count { get; private set; }

    public int Capacity { get; private set; }

    public void AddFirst(T item)
    {
        if (this.Count == this.Capacity)
        {
            this.Resize();
        }

        this.Count++;

        Node[] newArr = new Node[this.Count];

        newArr[0] = new Node(item);

        for (int i = 1; i < this.Count; i++)
        {
            newArr[i] = this.arr[i - 1];
        }

        this.Head = newArr[0];

        if (this.Count > 1)
        {
            newArr[0].Next = newArr[1];
        }

        this.arr = newArr;

        this.Tail = this.arr[this.Count - 1];
    }

    public void AddLast(T item)
    {
        this.Count++;

        this.arr[Count - 1] = new Node(item);

        if (this.Head == null && this.Count > 0)
        {
            this.Head = this.arr[0];
        }

        if (this.Count == this.Capacity)
        {
            this.Resize();
        }

        else if (this.Count > 1)
        {
            this.arr[Count - 2].Next = this.arr[Count - 1];
        }

        this.Tail = this.arr[Count - 1];
    }

    public T RemoveFirst()
    {
        if (this.Count == 0)
        {
            throw new InvalidOperationException();
        }

        this.Count--;

        Node element = this.arr[0];

        if (this.Count != 0)
        {
            this.Head = this.arr[1];

            Node[] newArr = new Node[this.Count];

            for (int i = 0; i < this.Count; i++)
            {
                newArr[i] = this.arr[i + 1];
            }

            this.arr = newArr;
        }

        return element.Value;
    }

    public T RemoveLast()
    {
        if (this.Count == 0)
        {
            throw new InvalidOperationException();
        }

        Node element = this.arr[this.Count - 1];

        Node[] newArr = new Node[this.Count - 1];

        this.arr[this.Count - 1].Next = null;

        for (int i = 0; i < this.Count - 1; i++)
        {
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;

        this.Count--;

        if (this.Count > 0)
        {
            this.Tail = this.arr[this.Count - 1];
        }

        return element.Value;
    }

    public void Resize()
    {
        this.Capacity *= 2;

        Node[] newArr = new Node[this.Capacity];

        for (int i = 0; i < this.Count; i++)
        {
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
    }

    public IEnumerator<T> GetEnumerator()
    {
        Node current = this.Head;

        while (current?.Next != null)
        {
            yield return current.Value;

            current = current.Next;
        }

    }

    IEnumerator IEnumerable.GetEnumerator() => this.GetEnumerator();
}
