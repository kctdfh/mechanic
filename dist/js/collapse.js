        $("#header1").click(function () {
            var classList = this.className.split(/\s+/);
            for (var i = 0; i < classList.length; i++) {
                if (classList[i] === "open") {
                    this.classList.remove("open");
                    $("#body1").slideUp();
                } else {
                    this.classList.add("open");
                    $("#body1").slideDown();
                }
            };

        });
        $("#header2").click(function () {
            var classList = this.className.split(/\s+/);
            for (var i = 0; i < classList.length; i++) {
                if (classList[i] === 'open') {
                    this.classList.remove("open");
                    $("#body2").slideUp();
                } else {
                    this.classList.add("open");
                    $("#body2").slideDown();
                }
            };

        });
        $("#header3").click(function () {
            var classList = this.className.split(/\s+/);
            for (var i = 0; i < classList.length; i++) {
                if (classList[i] === 'open') {
                    this.classList.remove("open");
                    $("#body3").slideUp();
                } else {
                    this.classList.add("open");
                    $("#body3").slideDown();
                }
            };

        });


        $("#header4").click(function () {
            var classList = this.className.split(/\s+/);
            for (var i = 0; i < classList.length; i++) {
                if (classList[i] === 'open') {
                    this.classList.remove("open");
                    $("#body4").slideUp();
                } else {
                    this.classList.add("open");
                    $("#body4").slideDown();
                }
            };

        });
        $("#header5").click(function () {
            var classList = this.className.split(/\s+/);
            for (var i = 0; i < classList.length; i++) {
                if (classList[i] === 'open') {
                    this.classList.remove("open");
                    $("#body5").slideUp();
                } else {
                    this.classList.add("open");
                    $("#body5").slideDown();
                }
            };

        });
        $("#header6").click(function () {
            var classList = this.className.split(/\s+/);
            for (var i = 0; i < classList.length; i++) {
                if (classList[i] === 'open') {
                    this.classList.remove("open");
                    $("#body6").slideUp();
                } else {
                    this.classList.add("open");
                    $("#body6").slideDown();
                }
            };

        });