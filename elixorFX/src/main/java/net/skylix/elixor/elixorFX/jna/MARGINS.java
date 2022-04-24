package net.skylix.elixor.elixorFX.jna;

import com.sun.jna.Structure;

@Structure.FieldOrder({ "cxLeftWidth", "cxRightWidth", "cyTopHeight", "cyBottomHeight" })
public class MARGINS extends Structure {
    public int cxLeftWidth;
    public int cxRightWidth;
    public int cyTopHeight;
    public int cyBottomHeight;
}
