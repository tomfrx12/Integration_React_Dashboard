export default function ChooseStudent() {
    return (
        <div>
            <label className="p-4">
            Année:
                <select className="p-2">
                    <option>A1</option>
                    <option>A2</option>
                    <option>A3</option>
                </select>
            </label>
            <label className="p-4">
            Eleve:
                <select className="p-2">
                    <option>Crista</option>
                    <option>Anas</option>
                    <option>Nino</option>
                </select>
            </label>
        </div>
    );
}
