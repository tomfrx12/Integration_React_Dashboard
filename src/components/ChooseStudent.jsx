export default function ChooseStudent() {
  return (
    <div>
        <label className="p-4">
        Année:
            <select className="p-2" name="selectedFruit">
                <option value="apple">A1</option>
                <option value="banana">A2</option>
                <option value="orange">A3</option>
            </select>
        </label>
        <label className="p-4">
        Eleve:
            <select className="p-2" name="selectedFruit">
                <option value="apple">Crista</option>
                <option value="banana">Anas</option>
                <option value="orange">Nino</option>
            </select>
        </label>
    </div>
  );
}
