# React-Native-Travels

# Outra maneira de pesquisar o texto da pesquisa

    const [images, setImages] = useState([]);

    useEffect(() => {
        const pattern = '\\bpattern';
        const regex = pattern.replace('pattern', pesquisa);
        const reg = new RegExp(regex, 'gi');
        console.log(pesquisa, reg);
        setImages(
        pesquisa && pesquisa.length > 0
            ? data.filter(r => r.name.match(reg))
            : data,
        );
    }, [pesquisa]);

    const pattern = '\\bpattern';
    const regex = pattern.replace('pattern', pesquisa);
    const reg = new RegExp(regex, 'gi');
