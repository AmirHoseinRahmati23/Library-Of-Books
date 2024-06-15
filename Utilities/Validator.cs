namespace Utilities;

public static class Validator
{
    public static string IfNullEmpty(this string? value)
    {
        return (value == null)? string.Empty: value;
    }
}
