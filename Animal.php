<?php

class Animal {

    public array $animals = [];


    public function __construct(array $data)
    {
        $this->animals = $data;
    }

    public function index()
    {
        $animals = $this->animals;

        foreach ($animals as $key => $animal) {
            echo "index: $key, name: $animal" . PHP_EOL;
        }
    }

    public function store(string $data)
    {
        // array_push($this->animals, $data);
        $this->animals[] = $data;
    }

    public function update($index, $data)
    {
        $this->animals[$index] = $data;

    }

    public function destroy($index)
    {
        unset($this->animals[$index]);

    }
}
$data = ["ayam", "kucing", "angsa", "singa"];

$animals = new Animal($data);

echo "Menampilkan data animals" . PHP_EOL;
$animals->index();

echo PHP_EOL;

echo "Menambahkan data baru:" . PHP_EOL;
$animals->store("monyet");
$animals->index();

echo PHP_EOL;

echo "Mengupdate data:" . PHP_EOL;
$animals->update(2, "rubah");
$animals->index();

echo PHP_EOL;

echo "Menghapus data:" . PHP_EOL;
$animals->destroy(3);
$animals->index();