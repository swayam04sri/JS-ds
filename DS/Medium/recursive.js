function print(n) {

    if (n > 100)
        return;
    console.log(n);
    print(n + 1);

}

print(1);