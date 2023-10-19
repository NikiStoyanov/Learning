using System;
using System.Collections.Generic;

public class BinarySearchTree<T> where T : IComparable<T>
{
    private Node root;

    private class Node
    {
        public Node(T value)
        {
            this.Value = value;
        }

        public T Value { get; set; }

        public Node Left { get; set; }

        public Node Right { get; set; }
    }

    public void Insert(T value)
    {
        if (this.root == null)
        {
            this.root = new Node(value);

            return;
        }

        Node parent = null;

        var current = this.root;

        while (current != null)
        {
            parent = current;

            if (value.CompareTo(current.Value) < 0)
            {
                current = current.Left;
            }
            else if (value.CompareTo(current.Value) > 0)
            {
                current = current.Right;
            }
            else
            {
                break;
            }
        }

        if (value.CompareTo(parent.Value) < 0)
        {
            parent.Left = new Node(value);
        }
        else if (value.CompareTo(parent.Value) > 0)
        {
            parent.Right = new Node(value);
        }
    }

    public bool Contains(T value)
    {
        var current = this.root;

        while (current != null)
        {
            if (value.CompareTo(current.Value) < 0)
            {
                current = current.Left;
            }
            else if (value.CompareTo(current.Value) > 0)
            {
                current = current.Right;
            }
            else
            {
                break;
            }
        }

        return current != null;
    }

    public void DeleteMin()
    {
        var current = this.root;

        Node parent = null;

        while (current != null)
        {
            if (current.Left != null)
            {
                parent = current;

                current = current.Left;
            }
            else
            {
                current = null;

                if (parent != null)
                {
                    parent.Left = null;
                }
            }
        }
    }

    public BinarySearchTree<T> Search(T item)
    {
        throw new NotImplementedException();
    }

    public IEnumerable<T> Range(T startRange, T endRange)
    {
        throw new NotImplementedException();
    }

    public void EachInOrder(Action<T> action)
    {
        throw new NotImplementedException();
    }
}

public class Launcher
{
    public static void Main(string[] args)
    {
        
    }
}
