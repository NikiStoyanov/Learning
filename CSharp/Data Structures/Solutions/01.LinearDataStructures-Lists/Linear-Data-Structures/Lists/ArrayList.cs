using System;

public class ArrayList<T>
{
    private T[] arr;

    public ArrayList()
    {
        this.Capacity = 4;

        this.arr = new T[this.Capacity];
    }

    public int Count { get; set; }

    public int Capacity { get; private set; }

    public T this[int index]
    {
        get
        {
            if (index < 0 || index >= Count)
            {
                throw new ArgumentOutOfRangeException();
            }

            return this.arr[index];
        }

        set
        {
            if (index < 0 || index >= Count)
            {
                throw new ArgumentOutOfRangeException();
            }

            this.arr[index] = value;
        }
    }

    public void Add(T item)
    {
        if (this.Count == this.Capacity)
        {
            this.Resize();
        }

        this.arr[Count] = item;
        this.Count++;
    }

    public T RemoveAt(int index)
    {
        if (index < 0 || index >= Count)
        {
            throw new ArgumentOutOfRangeException();
        }

        T element = this.arr[index];

        T[] newArr = new T[this.Count - 1];

        for (int i = index; i < this.Count - 1; i++)
        {
            this.arr[i] = this.arr[i + 1];
        }

        this.Count--;

        for (int i = 0; i < this.Count; i++)
        {
            newArr[i] = this.arr[i];
        }

        return element;
    }

    public void Resize()
    {
        this.Capacity *= 2;

        T[] newArr = new T[this.Capacity];

        for (int i = 0; i < this.Count; i++)
        {
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
    }
}
