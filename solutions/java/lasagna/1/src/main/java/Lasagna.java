public class Lasagna {
    public int expectedMinutesInOven() {
        return 40;
    }

    public int remainingMinutesInOven(int minutesInOven) {
        if (minutesInOven > expectedMinutesInOven()) return 0;
        return expectedMinutesInOven() - minutesInOven;
    }

    public int preparationTimeInMinutes(int layersNumber) {
        return layersNumber * 2;
    }

    public int totalTimeInMinutes(int layersNumber, int minutesLasagnaHasBeenInTheOven) {
        return this.preparationTimeInMinutes(layersNumber) + minutesLasagnaHasBeenInTheOven;
    }
}
