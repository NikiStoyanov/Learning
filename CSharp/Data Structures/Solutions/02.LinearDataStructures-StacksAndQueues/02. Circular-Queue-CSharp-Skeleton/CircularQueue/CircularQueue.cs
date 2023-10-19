using System;

public class CircularQueue<T>
{
    private const int DefaultCapacity = 4;

    private T[] arr;
    private bool isFirstEnqueue = true;

    public int Count { get; private set; }

    public int MaxCount { get; private set; }

    public int CurrentPosition { get; private set; }

    public int Capacity { get; private set; }

    public T Head { get; set; }

    public T Tail { get; set; }

    public CircularQueue(int capacity = DefaultCapacity)
    {
        this.Count = 0;
        this.CurrentPosition = 0;

        this.Capacity = capacity;

        this.arr = new T[this.Capacity];
    }

    public void Enqueue(T element)
    {
        this.Count++;
        this.MaxCount++;

        if (this.Count == this.Capacity)
        {
            this.Resize();
        }

        if (this.CurrentPosition == this.Capacity)
        {
            this.CurrentPosition = 0;
        }

        this.arr[this.CurrentPosition] = element;

        if (isFirstEnqueue)
        {
            this.Head = this.arr[0];

            this.isFirstEnqueue = false;
        }

        this.Tail = this.arr[this.CurrentPosition];

        this.CurrentPosition++;
    }

    private void Resize()
    {
        this.Capacity *= 2;

        T[] newArr = new T[this.Capacity];

        for (int i = 0; i < this.Count; i++)
        {
            newArr[i] = this.arr[i];
        }

        this.CopyAllElements(newArr);
    }

    private void CopyAllElements(T[] newArray)
    {
        for (int i = 0; i < this.Count; i++)
        {
            newArray[i] = this.arr[i];
        }

        this.arr = newArray;
    }

    // Should throw InvalidOperationException if the queue is empty
    public T Dequeue()
    {
        if (this.Count == 0)
        {
            throw new InvalidOperationException();
        }

        this.Count--;

        T element = this.Head;

        this.arr[0] = default(T);

        if (Array.IndexOf(this.arr, this.Head) < this.Capacity - 1)
        {
            this.Head = this.arr[Array.IndexOf(this.arr, this.Head) + 1];
        }
        else
        {
            this.Head = this.arr[0];
        }
        

        return element;
    }

    public T[] ToArray()
    {
        T[] arr = new T[this.Count];

        for (int i = 0; i < this.Count; i++)
        {
            arr[i] = this.arr[i];
        }

        return arr;
    }
}


public class Example
{
    public static void Main()
    {

        CircularQueue<int> queue = new CircularQueue<int>();

        queue.Enqueue(1);
        queue.Enqueue(2);
        queue.Enqueue(3);
        queue.Enqueue(4);
        queue.Enqueue(5);
        queue.Enqueue(6);

        Console.WriteLine("Count = {0}", queue.Count);
        Console.WriteLine(string.Join(", ", queue.ToArray()));
        Console.WriteLine("---------------------------");

        int first = queue.Dequeue();
        Console.WriteLine("First = {0}", first);
        Console.WriteLine("Count = {0}", queue.Count);
        Console.WriteLine(string.Join(", ", queue.ToArray()));
        Console.WriteLine("---------------------------");

        queue.Enqueue(-7);
        queue.Enqueue(-8);
        queue.Enqueue(-9);
        Console.WriteLine("Count = {0}", queue.Count);
        Console.WriteLine(string.Join(", ", queue.ToArray()));
        Console.WriteLine("---------------------------");

        first = queue.Dequeue();
        Console.WriteLine("First = {0}", first);
        Console.WriteLine("Count = {0}", queue.Count);
        Console.WriteLine(string.Join(", ", queue.ToArray()));
        Console.WriteLine("---------------------------");

        queue.Enqueue(-10);
        Console.WriteLine("Count = {0}", queue.Count);
        Console.WriteLine(string.Join(", ", queue.ToArray()));
        Console.WriteLine("---------------------------");

        first = queue.Dequeue();
        Console.WriteLine("First = {0}", first);
        Console.WriteLine("Count = {0}", queue.Count);
        Console.WriteLine(string.Join(", ", queue.ToArray()));
        Console.WriteLine("---------------------------");
    }
}
