using System;
using System.Collections.Generic;

public class Tree<T>
{
    private T root;
    private IList<Tree<T>> children;
    public Tree(T value, params Tree<T>[] children)
    {
        this.root = value;
        this.children = children;
    }

    public void Print(int indent = 0)
    {
        var emptySpace = new string(' ', indent);
        Console.WriteLine(emptySpace + this.root);
        foreach (var child in this.children)
        {
            child.Print(indent + 2);
        }
    }

    public void Each(Action<T> action)
    {
        action(this.root);

        foreach (var child in this.children)
        {
            child.Each(action);
        }
    }

    public IEnumerable<T> OrderDFS()
    {
        var result = new List<T>();

        OrderDFS(this, result);

        return result;
    }

    private void OrderDFS(Tree<T> tree, List<T> result)
    {
        foreach (var child in tree.children)
        {
            this.OrderDFS(child, result);
        }

        result.Add(tree.root);
    }

    public IEnumerable<T> OrderBFS()
    {
        var result = new List<T>();
        var queue = new Queue<Tree<T>>();

        queue.Enqueue(this);

        while (queue.Count > 0)
        {
            var tree = queue.Dequeue();
            result.Add(tree.root);
            foreach (var child in tree.children)
            {
                queue.Enqueue(child);
            }
        }

        return result;
    }
}
