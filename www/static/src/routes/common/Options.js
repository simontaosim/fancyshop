import provinces from 'china-division/dist/pca-code.json'

const options = provinces.map(province => ({
    label: province.name,
    value: province.code,
    children: province.children.map(city =>({
        label: city.name,
        value: city.code,
        children: city.children.map(area => ({
            label: area.name,
            value: area.value,
            children: area.children
        }))
    }))
}));

export default options;