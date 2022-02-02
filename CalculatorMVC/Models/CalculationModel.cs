namespace CalculatorMVC.Models
{
    public static class CalculationModel
    {
        public static decimal Add(decimal value1, decimal value2)
        {
            return value1 + value2;
        }

        public static decimal Subtract(decimal value1, decimal value2)
        {
            return value1 - value2;
        }

        public static decimal Multiply(decimal value1, decimal value2)
        {
            return value1 * value2;
        }

        public static decimal Divide(decimal value1, decimal value2)
        {
            return value2 == 0 ? value1 : value1 / value2;
        }
    }
}