using System;

public class BinaryTree<T>
{
    private readonly T value;
    private readonly BinaryTree<T> left;
    private readonly BinaryTree<T> right;

    public BinaryTree(T value, BinaryTree<T> leftChild = null, BinaryTree<T> rightChild = null)
    {
        this.value = value;
        this.left = leftChild;
        this.right = rightChild;
    }

    public void PrintIndentedPreOrder(int indent = 0)
    {
        var emptySpace = new string(' ', indent);

        Console.WriteLine(emptySpace + this.value);
        this.left?.PrintIndentedPreOrder(indent + 2);
        this.right?.PrintIndentedPreOrder(indent + 2);
    }

    public void EachInOrder(Action<T> action)
    {
        this.left?.EachInOrder(action);
        action(this.value);
        this.right?.EachInOrder(action);
    }

    public void EachPostOrder(Action<T> action)
    {
        this.left?.EachPostOrder(action);
        this.right?.EachPostOrder(action);
        action(this.value);
    }
}
